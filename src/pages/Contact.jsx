export const Contact = () => {
    const handleSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="form-container">
                    <form action={handleSubmit}>
                        <h1>Contact Us</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Your Name"
                            required
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />

                        <textarea
                            placeholder="Enter your message"
                            name="message"
                            required
                        />

                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
