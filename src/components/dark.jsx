var isDark = JSON.parse(localStorage.getItem('dark'))

if(isDark) {
    document.getElementById('root').classList.add('dark')
} else {
    document.getElementById('root').classList.remove('dark')
}

export default function() {


    var apply = () => {
        isDark = !isDark

        if(isDark) {
            document.getElementById('root').classList.add('dark')
        } else {
            document.getElementById('root').classList.remove('dark')
        }

        localStorage.setItem('dark', JSON.stringify(isDark))
    }

    return (
        <md-fab lowered onClick={() => apply()} label="dark"></md-fab>
    )
}