import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Tickets',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Tickets" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table>
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Subject</td>
                                        <td>Content</td>
                                        <td>User</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
