<template>
    <div class="main-chart">
        <div class="main-chart__title">Подписчики</div>
        <LineChart id="canvas" :chart-data="computedData"></LineChart>
        <div class="main-chart__descr">
            Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижать планку.
        </div>
    </div>
</template>

<script>
import LineChart from "./js/LineChart";

export default {

    name: 'Chart',

    props: ['sumPrice'],

    components: {
        LineChart
    },

    data () {
        return {
            datacollection: null
        }
    },

    mounted () {

    },

    computed: {
        computedData() {

            let data = {
                datasets: [
                    {
                        label: false,
                        pointBackgroundColor: 'white',
                        borderWidth: 2,
                        borderColor: '#AB70C6'
                    }
                ]
            };
            data.labels = [];
            data.datasets[0].data = [];

            for (let i=1; i<8; i++) {
                data.labels.push(`${i} день`);
                data.datasets[0].data.push((i+Math.random())* this.sumPrice);
            }

            return data;
        }
    },

}
</script>

<style lang="scss">
    .main{
        &-chart{
            margin-top: 20px;
            max-height: 200px;
            canvas{
                height: 200px !important;
            }
            &__title{
                margin-bottom: 10px;
            }
            &__descr{
                line-height: 1.6;
                color: rgba(0,0,0, 0.6);
                font-size: 14px;
                margin-top: 20px;
                max-width: 500px;
            }
        }
        @media screen and (min-width: 540px) {
            &-chart {
                max-height: 250px;

                canvas {
                    height: 250px !important;
                }
            }
        }

        @media screen and (min-width: 960px ) {
            &-chart{
                margin-top: 115px;
                &__descr{
                    position: absolute;
                    left: 0;
                }
            }
        }
    }
</style>