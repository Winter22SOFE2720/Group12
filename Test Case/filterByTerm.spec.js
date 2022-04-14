describe("Filter function", () => {
    // test stuff
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        const output1 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ]

        const output2 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ]



        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output);

        //EXERCISE
        //Part A
        expect(filterByTerm(input, "uRL")).toEqual(output1);


        //Part B
        expect(filterByTerm(input, "")).toEqual(output2);




        // actual test
    });
});

function filterByTerm(inputArr, searchTerm) {
    if (!inputArr.length) {
        throw Error("Input cannot be empty");
    }


    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}








