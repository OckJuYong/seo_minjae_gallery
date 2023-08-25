import React, { useState } from 'react';
import Header from '../layout/header'
import './spec.css';


const Spec = () => {
    const [achievements, setAchievements] = useState([
        { id:1, title: '멋쟁이 사자처럼 12기', period: '2024.02~2024.12', description: '멋쟁이 사자처럼 12시 수료 한밭대 대표', checked:false},
        { id:2, title: '한밭대학교 컴퓨터공학과 학생회장', period: '2023.10 - 2024.10', description: '한밭대학교 컴퓨터공학과 학생회장', checked:false},
        { id:3, title: '멋쟁이 사자처럼 11기', period: '2023.02 - 2023.12', description: '멋쟁이 사자처럼 11기 수료 부원', checked:false},
        { id:4, title: '학위', period: '2020 - 2026', description: '한밭대학교 컴퓨터 공학과 수료', checked:false},
        { id:5, title: '첫 코딩경험', period: '2018.12 - 2019.02', description: '그린컴퓨터 아트학원 C언어 수료', checked:false},
    ]);

    const handleCheckboxChange = (id) => {
        setAchievements(prevAchievements => {
            return prevAchievements.map(achievement => {
                if (achievement.id === id) {
                    // console.log(...achievement);
                    return { ...achievement, checked: !achievement.checked };
                }
                return achievement;
            });
        });
    };

    return (
        <div>
            <Header />
            <div className='specList'>
                {achievements.map(achievement => (
                    <div key={achievement.id}>
                        {achievement.id} <tb/>
                        <input
                            type="checkbox"
                            checked={achievement.checked}
                            onChange={() => handleCheckboxChange(achievement.id)}
                        />
                        {achievement.title} / 
                        {achievement.period} / 
                        {achievement.description}
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Spec