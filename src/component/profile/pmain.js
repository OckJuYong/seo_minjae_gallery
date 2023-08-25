import React from 'react';
import Juyong from './juyong.jpg';
import './pmain.css';


const Pmain = ({ checkedAchievements  }) => {
    return (
        <div className='main_container'>
            <div className='Ockimg'>
                <h3 className='MyName'>Ock JuYong</h3>
                <img src={Juyong} alt="주용의 사진" className='juyong' type="file"/>
                <div>옥주용 멋사 에디션</div>
            </div>
            <div className='Introduction'>
                <div className='introduction_MyName'>HBN 옥주용</div>
                <br />
                <br />
                <div className='Hover'>안녕 날 소개하지 직업은 트래퍼~~~</div>
                <br />
                
                <div className='Misson'>
                주요업적
                    <div className='TableScrollContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>활동</th>
                                    <th>기간</th>
                                    <th>활동 내용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>멋쟁이 사자처럼 12기</td>
                                    <td>2024.02 - 2024.12</td>
                                    <td>멋쟁이 사자처럼 12기 수료 한밭대 대표</td>
                                </tr>
                                <tr>
                                    <td>한밭대학교 컴퓨터공학과 학생회장</td>
                                    <td>2023.10 - 2024.10</td>
                                    <td>한밭대학교 컴퓨터공학과 학생회장</td>
                                </tr>
                                <tr>
                                    <td>카카오 협업 제주도 구름톤</td>
                                    <td>2023.08 - 2023.09</td>
                                    <td>카카오 협업 구름톤 탈락...</td>
                                </tr>
                                <tr>
                                    <td>멋쟁이 사자처럼 11기</td>
                                    <td>2023.02 - 2023.12</td>
                                    <td>멋쟁이 사자처럼 11기 수료 부원</td>
                                </tr>
                                <tr>
                                    <td>학위</td>
                                    <td>2020 - 2026</td>
                                    <td>한밭대학교 컴퓨터 공학과 수료</td>
                                </tr>
                                <tr>
                                    <td>첫 코딩경험</td>
                                    <td>2018.12 - 2019.02</td>
                                    <td>그린컴퓨터 아트학원 C언어 수료</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div className='My_information'>
                    <div> - Tel : 010-1234-5678</div>
                    <div> - Mail : Hanbat.ac.kr</div>
                    <div> - Github : OckJuYong.git.io</div>
                </div>
            </div>
        </div>
    )
}

export default Pmain