import React from 'react'


const Newsletter = () => {


    const onSubmitForm = (e) => {

    }

    return (
        <>
            <section className="newsletter-section">
                <div className="container-gt">
                    <form
                        onSubmit={(e) => onSubmitForm(e)}
                        action="https://formspree.io/f/mknkvenn"
                        method="POST"
                    >

                        <div className="form-newsletter-wrapper">
                            <input name="email" type="email" placeholder="Enter email" />

                            <input name="author_name" type="hidden" value='Alton Bryant' />
                            <button>
                                <input type="submit" name="submit" />
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter