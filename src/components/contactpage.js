import React from "react";

function ContactPage() {
    return (
        <div className="contact-page">
            <h1>Контактная информация</h1>
            <div className="contact-info">
                <h2>Номер телефона:</h2>
                <p>+7 (777) 777-77-77</p>
            </div>
            <div className="social-media">
                <h2>Социальные сети:</h2>
                <ul>
                    <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>

            <div className="map">
                <h2>Мы находимся здесь:</h2>
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4567890123456!2d-122.08405898466456!3d37.422004979805656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858092f3437f57%3A0xa83712aeec5782c2!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1638534519545!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactPage;
