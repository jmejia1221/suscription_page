import React from 'react';

const App = () => {
    const plans = [
        {
            plan: 'Free',
            features: [
                'EDX Notes'
            ]
        },
        {
            plan: 'Basic',
            features: [
                'Certificates Instructor Generation',
                'Courseware search',
                'EDX Notes',
                'Dashboard Search'
            ]
        },
        {
            plan: 'Premium',
            features: [
                'Certificates Instructor Generation',
                'Courseware search',
                'EDX Notes',
                'Dashboard Search',
                'Instructor Background Tasks',
                'Course Discovery'
            ]
        }
    ];

    return (
        <h1>Flexible Plans</h1>
    );
};

export default App;