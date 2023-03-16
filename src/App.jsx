
import React from 'react'

import Timer from  './components/timer'
import Dark  from './components/dark'


export default class extends React.Component {

    constructor() {
        super()
        this.state = {
            flag: true,
        }
    }

    close = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        return (
            <div className='dark:bg-gray-900'>
                <nav className='fixed bottom-0 right-0 w-full bg-purple-100 dark:bg-slate-700 dark:text-white py-2 z-50'>
                    <div className='fixed right-5 bottom-10'>
                        <div className='w-16 h-16 rounded-2xl relative top-14 right-1 bg-gradient-to-b from-transparent to-white dark:to-gray-900'></div>
                        <div className='relative -top-1'>
                            <Dark></Dark>
                        </div>
                    </div>
                    <div className='px-4 py-2 flex items-center justify-start font-bold'>
                        <label className='flex items-center gap-2'>
                            Show
                            <md-switch selected onClick={() => this.close()}></md-switch>
                        </label>

                    </div>
                </nav>


                <main className='min-h-screen'>
                    {
                        this.state.flag ? <Timer /> : null
                    }
                </main>

                <footer></footer>
            </div>
        )
    }
}