<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen">
        <ol :start="startNumber" class="list-decimal mt-4 max-w-5xl text-left dark:text-white">
            <li v-for="(item, index) in currentItems" :key="index" class="mt-4 first:mt-0">
                {{ item }}
            </li>
        </ol>

        <button v-if="showButton"
            class="mt-5 py-2 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400"
            @click="nextGroup">
            other items
        </button>
    </div>
</template>

<script>
export default {
    name: 'OtherItems',
    data() {
        return {
            allItems: [
                'I find the visual encoding is poor and violates good practice.',
                'I find the visualization has overlapping information.',
                'I find the visualization provides not enough context.',
                'I find the variables in the visualization visible.',
                'I feel confident about this visualization.',
                'I feel informed by the visualization.',
                'I find this visualization attractive.',
                'I find that the structure is unclear.',
                'I find this visualization visually pleasing.',
                'I find all data points are visible in the visualization.',
                'I find the visualization occludes information.',
                'I find the colour coding overly complex.',
                'I feel engaged with the visualization.',
                'I find the visualization dense.',
                'I feel curious about this visualization.',
                'I find the visualization uses too many colours.',
                'I find the visualization displays several dimensions at once.',
                'I feel the main idea is not clear within the first few seconds.',
                'I find many visual elements distracting.',
                'I find the visualization type requires higher cognitive effort.',
                'I find there is too much information in this visualization.',
                'I find the visualization requires effort to understand.',
                'I find this visualization difficult to read.',
                'I feel confused by the visualization.',
                'I find the visualization overloaded.',
                'I find the large number of data items makes the visualization too complex.',
                'I find this visualization takes time to understand.',
                'I find the visualization has a complex visual appearance.',
                'I feel that this visualization causes cognitive overload.',
                'I find the visualization cluttered.',
                'I find the visualization has unnecessary complexity.',
                'I feel overwhelmed by the visualization.',
                'I feel the mental demand of this visualization is high.'
            ],
            groupSize: 17,
            currentGroupIndex: 0,
            showButton: true
        }
    },
    computed: {
        groups() {
            const groups = []
            for (let i = 0; i < this.allItems.length; i += this.groupSize) {
                groups.push(this.allItems.slice(i, i + this.groupSize))
            }
            return groups
        },
        currentItems() {
            return this.groups[this.currentGroupIndex]
        },
        startNumber() {
            return this.currentGroupIndex * this.groupSize + 1
        }
    },
    methods: {
        nextGroup() {
            this.currentGroupIndex = (this.currentGroupIndex + 1) % this.groups.length
            this.showButton = false
        }
    }
}
</script>