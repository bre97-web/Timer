import moment from 'moment'
import React from 'react'

export default class extends React.Component {

    timer = null
    time = 0
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            record: [],
            isPause: true,
        }
    }

    pause = () => {
        if(this.state.isPause) {
            this.timer = setInterval(() => {
                var time = moment.duration(this.time + 1, 'seconds')
                this.setState({
                    ...this.state,
                    time: moment({
                        h: time.hours(),
                        m: time.minutes(),
                        s: time.seconds()
                    }).format(time.minutes() >= 1 ? time.hours() >= 1 ? 'HH:mm:ss' : 'mm:ss' : 'ss')
                })
                this.time ++
            }, 1000)
        } else {
            clearInterval(this.timer)
        }

        this.setState({
            ...this.state,
            isPause: !this.state.isPause
        })
    }
    clear = () => this.setState({
        ...this.state,
        record: []
    })
    record = () => this.setState({
        ...this.state,
        record: [...this.state.record, this.state.time]
    })

    render() {
        return (
            <div>

                <main>

                    <div className={this.state.record.length === 0 ? 'mt-44' : null}>
                        <div className='text-center mb-4 dark:text-white'>
                            <h1 className='text-9xl font-bold'>{ this.state.time }</h1>
                            <h2>Timer</h2>
                        </div>

                        
                        <div className='flex gap-2 items-center justify-center mb-4'>
                            <md-filled-button onClick={() => this.pause()} label={!this.state.isPause ? 'Pause' : this.state.time === 0 ? 'Start' : 'Continue'}></md-filled-button>
                            <md-text-button onClick={() => this.record()} label='Record'></md-text-button>
                            <md-text-button onClick={() => this.clear()} label='Clear'></md-text-button>
                        </div>
                    </div>

                    {
                        this.state.record.length ? 
                        <ul className='flex flex-col gap-1 px-4 max-w-lg mx-auto'>
                            {
                                this.state.record.map((e, index) => <li key={ index } className='rounded-md w-full bg-gray-100 dark:bg-gray-800 dark:text-white flex items-center px-4 py-2'>{ e }</li>)
                            } 
                        </ul> : null
                    }
                    
                </main>

            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
}