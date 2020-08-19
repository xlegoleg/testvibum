import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,

    mixins: [reactiveProp],

    watch: {
        chartData: {
            handler: function() {
                this.$data._chart.config.data.datasets[0].backgroundColor = this.gradient;
                this.$data._chart.update();
            },
        }
    },

    data() {
        return {
           options: {
               responsive: true,
               maintainAspectRatio: false,
               legend: {
                   display: false,
               }
           },
            gradient: null,
        }
    },

    mounted () {
        let gradientFill = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0,300,0, -900);

        gradientFill.addColorStop(0, "#FFFFFf");
        gradientFill.addColorStop(1, "#864AA2");

        this.gradient = gradientFill;

        this.chartData.datasets[0].backgroundColor = gradientFill

        this.renderChart(this.chartData, this.options)
    }
}