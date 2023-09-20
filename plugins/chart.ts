import { 
  Chart, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement,
  PieController,
  DoughnutController,
  LineController,
  PolarAreaController,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale, 
  LinearScale,
  RadialLinearScale,
} from 'chart.js'
export default defineNuxtPlugin(() => {
    Chart.register(
      CategoryScale, 
      LinearScale,
      RadialLinearScale, 
      BarElement,
      PieController,
      DoughnutController,
      LineController,
      PolarAreaController,
      LineElement,
      PointElement,
      ArcElement,
      Title, 
      Tooltip, 
      Legend
    )
})