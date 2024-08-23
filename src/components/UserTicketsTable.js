'use client';

import React, { useState, useEffect } from 'react';
import axios from '@/lib/axios';

export default function UserTicketsTable({ userEmail }) {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchUserTickets = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/users/${userEmail}/tickets?page=${currentPage}`);
                setTickets(response.data.data);
                setTotalPages(response.data.meta.last_page);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchUserTickets();
    }, [userEmail, currentPage]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading tickets</div>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Tickets for {userEmail}</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.id}</td>
                        <td className="px-6 py-4">{ticket.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.status ? 'Closed' : 'Open'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
    // ... (same as before)
}
