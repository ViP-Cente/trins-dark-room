import React from 'react';

const PrintsPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Photography Prints</h1>
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                Explore our collection of high-quality photography prints. Perfect for decorating your space or gifting to loved ones.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {/* Example prints */}
                {[
                    { id: 1, title: 'Sunset Bliss', image: '/images/sunset.jpg', price: '$50' },
                    { id: 2, title: 'Mountain Majesty', image: '/images/mountain.jpg', price: '$60' },
                    { id: 3, title: 'Ocean Serenity', image: '/images/ocean.jpg', price: '$55' },
                ].map((print) => (
                    <div key={print.id} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={print.image} alt={print.title} style={{ width: '100%', height: 'auto' }} />
                        <div style={{ padding: '10px' }}>
                            <h2 style={{ fontSize: '18px', margin: '0 0 10px' }}>{print.title}</h2>
                            <p style={{ fontSize: '16px', margin: '0 0 10px', color: '#555' }}>{print.price}</p>
                            <button
                                style={{
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 15px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrintsPage;