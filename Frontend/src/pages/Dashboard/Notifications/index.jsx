import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { getNotificationById, getNotifications } from '../../../api/notificationsAPI';
import { updateUserById } from '../../../api/usersAPI';
import useAuth from '../../../hooks/useAuth';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [showNotification, setShowNotifications] = useState(null);
    const [data, setData] = useState(null);

    const { user } = useAuth();

    useEffect(() => {
        getNotifications()
            .then(res => setNotifications(res.data.data))
            .catch(error => console.warn(error.message));
    }, []);

    // stating time id setter
    useEffect(() => {
        if (!showNotification && notifications.length) {
            setShowNotifications(notifications[0]._id);
        }
    }, [notifications, showNotification]);

    // getting notification data
    useEffect(() => {
        if (showNotification) {
            getNotificationById(showNotification)
                .then(res => setData(res.data.data))
                .catch(error => console.warn(error.message));
        }
    }, [showNotification]);

    const handleRoleRequest = (event, userId, role) => {
        updateUserById(userId, { role }).then(() => event.target.disabled = true)
            .catch(error => console.warn(error.message));
    };

    return (
        <Container className="my-3" style={{paddingTop: "80px"}}>
            <Row>
                <Col md="3" style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>
                    <div className="h6 fw-bold">Notifications</div>
                    <div>
                        {notifications.map((notification, index) => {
                            const read = notification.seenBy.find(id => id === user._id);

                            const onClick = () => {
                                notifications[index].seenBy.push(user._id);
                                setShowNotifications(notification._id);
                                setNotifications(notifications);
                            };

                            return (
                                <div key={notification._id} className={`border rounded my-2 p-2 ${read ? 'text-secondary' : 'border-dark'}` } onClick={onClick} style={{ cursor: 'pointer', color:"lightgray" }} >
                                    {notification.title && <div className="h6" style={{color:"lightgray"}}>{notification.title}</div>}
                                    {notification.message && <div className="text-nowrap" style={{ overflow: 'hidden', textOverflow: 'ellipsis', color:"lightgray" }}>{notification.message}</div>}
                                </div>
                            );
                        })}
                    </div>
                </Col>
                <Col id="notification-area" style={{backgroundColor:"rgba(51, 72, 63, 0.54)", color:"lightgray"}}>
                    {data ? <div className="text-secondary">
                        <div className="fw-bold" style={{color:"lightgray"}}>{data.title || '<no subject added>'}</div>
                        <div className="mb-3" style={{color:"lightgray"}}>{data.message}</div>
                        {(data.type === 'role-request') && <div>
                            <div className="fw-bold" style={{color:"lightgray"}}>Request</div>
                            <table className="mb-3">
                                <tbody>
                                    {[
                                        ['User id', data.requestData.userId],
                                        ['Role', data.requestData.role],
                                    ].map((item, idx) => <tr key={idx}>
                                        <th className="text-nowrap pe-3" style={{ verticalAlign: 'baseline' }}>{item[0]}:</th>
                                        <td style={{color:"lightgray"}}>{item[1]}</td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <Button variant="success" size="sm" className="rounded-0" onClick={e => handleRoleRequest(e, data.requestData.userId, data.requestData.role)}>Approve</Button>
                        </div>}
                    </div> : 'Data not found'}
                </Col>
            </Row>
        </Container>
    );
}

export default Notifications;