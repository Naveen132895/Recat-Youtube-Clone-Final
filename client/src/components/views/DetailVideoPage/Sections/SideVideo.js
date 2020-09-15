import React, {useEffect, useState} from 'react'
import axios from 'axios';
function SideVideo() {

    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setSideVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        

    }, [])

    const sideVideoItem = SideVideos.map(( video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

       return <div style={{ display: 'flex', marginTop: '1rem', padding: '0 2rem' }}>
        <div style={{ width:'40%', marginRight:'1rem' }}>
            <a href={`/video/${video._id}`}  style={{ color:'gray' }}>
                <img style={{ width: '100%' }} src={`https://lrznig.bn.files.1drv.com/y4mnY0aw0Y9VBaAQ0JyxytP6HsDTUbjWTrQ-K-Hsc3MthY65slhUhyvvlbr2SeYmiJbj3hhrhwUYvJ23EiUoalTR3-xdcn2UaTP_U5LGs9wgWUaui0zuAFodBs_d4uG3y9QHdL_eQuZzVp3kciJJ1mPHj-l-xIVzxLAxEseR8b07I2T2DbtIdlIPBtjek9-bfN4TngQJZk5f0VQJHBcFrYOsQ?width=320&height=240&cropmode=none`} alt="thumbnail" />
            </a>
        </div>

        <div style={{ width:'50%' }}>
            <a href={`/video/${video._id}`} style={{ color:'gray' }}>
                <span style={{ fontSize: '1rem', color: 'black' }}>{video.title}  </span><br />
                <span>{video.writer.name}</span><br />
                <span>{video.views}</span><br />
            </a>
        </div>
    </div>
    })

    return (
        <React.Fragment>
            <div style={{ marginTop:'3rem' }}></div>
            {sideVideoItem}


        </React.Fragment>
        
       
    )
}

export default SideVideo
