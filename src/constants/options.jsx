export const selectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '🫡'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Money is like paper to me',
        icon: '💸'
    }
]

export const selectLocalityOptions = [
    {
        id: 1,
        title: 'India',
        desc: 'Traveling in India',
        icon: '🚄'
    },
    {
        id: 2,
        title: 'World',
        desc: 'Ready to catch international flights',
        icon: '✈️'
    }
]

export const AI_PROMPT = "Suggest top 3 getaways in {locality} for a {mood} trip for {noOfDays} days with a {budget} budget. Generate a list of itineraries for each day with the place name, place detail, geocoordinates, in JSON format wrapped within trips that's it."