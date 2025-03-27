import React from 'react';

const Appointments = () => {
  const appointments = [
    { id: 1, name: 'John Doe', date: 'March 28, 2025', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', date: 'March 29, 2025', time: '2:00 PM' },
    { id: 3, name: 'Alice Johnson', date: 'March 30, 2025', time: '11:30 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h1>
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">{appointment.name}</p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;