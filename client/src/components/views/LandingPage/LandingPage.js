import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;
function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])





    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative' }}>
                <a href={`/video/${video._id}`} >
                <img style={{ width: '100%' }} alt="thumbnail" src={`https://lrznig.bn.files.1drv.com/y4mnY0aw0Y9VBaAQ0JyxytP6HsDTUbjWTrQ-K-Hsc3MthY65slhUhyvvlbr2SeYmiJbj3hhrhwUYvJ23EiUoalTR3-xdcn2UaTP_U5LGs9wgWUaui0zuAFodBs_d4uG3y9QHdL_eQuZzVp3kciJJ1mPHj-l-xIVzxLAxEseR8b07I2T2DbtIdlIPBtjek9-bfN4TngQJZk5f0VQJHBcFrYOsQ?width=320&height=240&cropmode=none`} />

                </a>
            </div><br />
            <Meta
                avatar={
                    <Avatar src={video.writer.image} />
                }
                title={video.title}
            />
            <span>{video.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        </Col>

    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > Recommended </Title>
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default LandingPage
