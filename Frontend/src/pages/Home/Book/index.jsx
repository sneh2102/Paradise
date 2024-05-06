import React from 'react'
import './Book.css'

const Book = () => {
  return (
    <div className='booksec'>
      <section classNameName="section-book" id="book">
                <div classNameName="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#/" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name"  id="name" required/>
                                    <label for="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address"  id="email" required/>
                                    <label for="email" className="form__label">Email address</label>
                                </div>
                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="smallTour" name="tourSize"/>
                                        <label for="smallTour" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Solo
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="largeTour" name="tourSize"/>
                                        <label for="largeTour" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Group
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn--green">Next step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Book
