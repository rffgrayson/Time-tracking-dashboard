import data from './data.json';
import "./styles.css";

console.log(data);

function updateDashboard (timeframe) {
    data.forEach(item => {
        const id = item.title.toLowerCase().replace(' ', '-');
        const {current, previous} = item.timeframes[timeframe];

        document.getElementById(`${id}-current-hours`).textContent = `${current}hrs`;
        document.getElementById(`${id}-previous-hours`).textContent = `Previous - ${previous}hrs`;
    });
}

document.querySelectorAll('.timeframe-btn').forEach(button => {
    button.addEventListener('click', () => {
        const timeframe = button.id.replace('-btn', '');
        updateDashboard(timeframe);
    }        
    )
}
)