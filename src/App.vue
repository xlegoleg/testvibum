<template>
    <div id="app">
        <div class="main">
            <h1 class="main-title">Прогноз продвижения</h1>
            <div class="main-wrapper">

                <div class="main-wrapper__first">
                    <DynamicPanel
                            :sum="sum"
                            v-on:update:sum="sum = $event"
                    ></DynamicPanel>
                </div>
                <div class="main-wrapper__second">
                    <Chart :sumPrice="sum"></Chart>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import DynamicPanel from "./components/DynamicPanel";
import Chart from "./components/Chart";

export default {

    name: 'App',

    components: {
        DynamicPanel,
        Chart
    },

    data() {
        return {
            sum: 0
        }
    },

    computed: {

    }
}
</script>

<style lang="scss">

    *{
        font-family: Open Sans;
    }

    .main{
        margin: 0 auto;
        padding: 0 10px;
        max-width: 540px;

        &-title{
            text-align: center;
            font-size: 32px;
        }
        &-wrapper{
            position: relative;
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }

        @media screen and (min-width: 540px) {
            max-width: 960px;
            padding: 0 15px;
        }

        @media screen and (min-width: 960px ) {
            max-width: 1200px;
            padding: 0 20px;
            &-wrapper{
                flex-direction: row;
                &__first{
                    width: 50%;
                }
                &__second{
                    width: 50%;
                }
            }
        }

    }


</style>
