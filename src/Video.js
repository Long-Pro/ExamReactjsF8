import video1 from './videos/tiktok1.mp4'
import video2 from './videos/tiktok2.mp4'
import { forwardRef,useImperativeHandle,useRef } from 'react'
function Video(props,ref){
  const videoRef=useRef()
  useImperativeHandle(ref,()=>({
    play(){
      videoRef.current.play()
    },
    pause(){
      videoRef.current.pause()
    }
  }))
  return(
    <video 
      src={video1}
      width={300}
      ref={videoRef}
    />
  )
}
export default forwardRef(Video)