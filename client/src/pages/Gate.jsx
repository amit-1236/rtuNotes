import React from 'react'
import { Link } from 'react-router-dom'

const Gate = () => {
    return (
        <>
            <section className="hero">
                <div className="bg-page">
                    <Link to="/" className="gate-back">← Back to Home</Link>

                    <div className="hero-text">
                        <h1>Let's Crack GATE Together!</h1>
                        <p>Cracking GATE is all about consistency, concepts, and practice. Bas thoda discipline chahiye.</p>
                    </div>

                    <i> Your Dream. Your Dedication. Our Support.

                        Cracking GATE is not just about studying hard; it's about learning smart, staying consistent, and believing in yourself.  </i>


                    <h3  >
                        GATE is challenging,
                        but your determination is stronger.
                    </h3>

                </div>
            </section>
        </>
    );
}

export default Gate