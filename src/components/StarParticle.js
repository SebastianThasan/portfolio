import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback, useMemo } from 'react'

const StarsParticle = (props) => {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true, // casuing the canvas the fill the entire screen (enabled by default)
                zIndex: 0, // this is the zIndex value used when the fullscreen is enabled (0 by by default)
            },
            particles: {
                opacity: {
                    value: { min: 0.3, max: 0.7 } // adjusting the opacity
                },
                size: {
                    value: { min: 1, max: 3 } // randomizing the individual particle sizes
                }
            }
        }
    }, [])

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    }, [])

    // setting an id is useful for identifying the correct particle component, which is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options} className='Particles' />
}

export default StarsParticle