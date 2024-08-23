'use client';

import React, { useState } from 'react';
import UserTickets from '@/components/UserTicketsTable';

export default function UserTicketsPage() {
    const [email, setEmail] = useState('');
    const [showTickets, setShowTickets] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowTickets(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">User Tickets</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter user email"
                    className="border rounded px-2 py-1 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    View Tickets
                </button>
            </form>
            {showTickets && <UserTickets userEmail={email} />}
        </div>
    );
}
