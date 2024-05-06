import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, ListGroup, Row, Table } from 'react-bootstrap';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { getPlans } from '../../../api/plansAPI';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Shared/Loading';
import Pagination from '../../Shared/Pagination';

const ManagePlans = () => {
    const [plans, setPlans] = useState([]);
    const [totalPlans, setTotalPlans] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    const { search } = useLocation();
    const query = useMemo(() => new URLSearchParams(search), [search]);

    const handelPageChange = (page) => setCurrentPage(page);

    const handleOnClick = (filter) => () => {
        setCurrentPage(1);
        filter ? query.set('filter', filter) : query.delete('filter');
        history.replace(`?${query.toString()}`);
    };


    const { user } = useAuth();
    const { url } = useRouteMatch();
    const limit = 12;
    const statusTextColor = {
        active: 'text-success',
        inactive: 'text-danger',
        discontinued: 'text-warning'
    };

    useEffect(() => {
        let queryText = '';
        if (user.role === 'manager') {
            queryText += `&manager.userId=${user._id}`;
        }

        if (query.get('filter')) {
            queryText += `&status=${query.get('filter')}`;
        }

        setIsLoading(true);
        getPlans(`?limit=${limit}&page=${currentPage}${queryText}&fields=name,price,rating,views,status`)
            .then(res => res.data)
            .then(res => {
                setPlans(res.data);
                setTotalPlans(res.count);
            })
            .catch(console.warn)
            .finally(() => setIsLoading(false));
    }, [currentPage, query, user]);

    return (
        <Container style={{paddingTop: "80px" }}>
            <Row >
                <Col xs="12" md="3" >
                    <ListGroup variant="flush" className="position-sticky top-0" >
                        <ListGroup.Item action onClick={handleOnClick()} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>{user.role === 'admin' ? 'All' : 'My'} plans</ListGroup.Item>
                        <ListGroup.Item action onClick={handleOnClick('active')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>Active plans</ListGroup.Item>
                        <ListGroup.Item action onClick={handleOnClick('inactive')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>Inactive plans</ListGroup.Item>
                        <ListGroup.Item action onClick={handleOnClick('discontinued')} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>Discontinued plans</ListGroup.Item>
                        {(user.role === 'admin') && <ListGroup.Item action onClick={() => history.push(`${url}/add-new-plan`)} style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>Add new plan</ListGroup.Item>}
                    </ListGroup>
                </Col>
                <Col style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>
                    {isLoading ? <Loading height="60" /> :
                        <Table striped hover responsive style={{color:"gray"}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Views</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{color:"lightgray"}}>
                                {plans.map((plan, index) => <tr key={plan._id} onClick={() => history.push(`${url}/${plan._id}`)} style={{color:"lightgray"}}>
                                    <td style={{color:"lightgray"}}>{index + 1 + (limit * (currentPage - 1))}</td>
                                    <td style={{color:"lightgray"}}>{plan.name}</td>
                                    <td style={{color:"lightgray"}}><i class="fa-solid fa-indian-rupee-sign"></i>{plan.price}</td>
                                    <td style={{color:"lightgray"}}>{plan.rating}</td>
                                    <td style={{color:"lightgray"}}>{plan.views}</td>
                                    <td className={`text-capitalize fw-bold ${statusTextColor[plan.status]}`} style={{color:"lightgray"}}>{plan.status}</td>
                                </tr>)}
                            </tbody>
                        </Table>}
                    {totalPlans > limit && <Pagination
                        numberOfButtons={Math.ceil(totalPlans / limit)}
                        currentPage={currentPage}
                        onClick={handelPageChange}
                    />}
                </Col>
            </Row>
        </Container>
    );
};

export default ManagePlans;