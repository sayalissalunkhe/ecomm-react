import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
    const {
        filters: { shape },
        updateFilterValue,
        all_products,
    } = useFilterContext();

    // get the unique values of each property
    // const caratOnlyData = getUniqueData(all_products, "carat");


    // const getUniqueData = (data, attr) => {
    //     let newVal = data.map((curElem) => {
    //         return curElem[attr];
    //     });

    //     // if (attr === "colors") {
    //     //     // return (newVal = ["All", ...new Set([].concat(...newVal))]);
    //     //     newVal = newVal.flat();
    //     // }

    //     return (newVal = ["all", ...new Set(newVal)]);
    // };

    const getUniqueData = (data, attr) => {
        let newVal = data.map((curElem) => {
            return curElem[attr];
        });

        return (newVal = ["all", ...new Set(newVal)]);
        // console.log(newVal);
    }
    // console.log("newVal");

    // we need to have the individual data of each in an array format
    const shapeOnlyData = getUniqueData(all_products, "shape");
    // const companyData = getUniqueData(all_products, "company");
    // const colorsData = getUniqueData(all_products, "colors");
    // console.log(
    //     "🚀 ~ file: FilterSection.js ~ line 23 ~ FilterSection ~ shapeOnlyData",
    //     shapeOnlyData
    // );

    return (
        <>
            <div className="filter-category">
                <h3>Category</h3>
                <div>
                    {shapeOnlyData.map((curElem, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                name="shape"
                                value={curElem}
                                onClick={updateFilterValue}>
                                {curElem}
                                {console.log(shape)}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* <div className="filter-company">
                <h3>Company</h3>

                <form action="#">
                    <select
                        name="company"
                        id="company"
                        className="filter-company--select"
                        onClick={updateFilterValue}>
                        {companyData.map((curElem, index) => {
                            return (
                                <option key={index} value={curElem} name="company">
                                    {curElem}
                                </option>
                            );
                        })}
                    </select>
                </form>
            </div>

            <div className="filter-colors colors">
                <h3>Colors</h3>

                <div className="filter-color-style">
                    {colorsData.map((curColor, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                value={curColor}
                                name="color"
                                style={{ backgroundColor: curColor }}
                                className="btnStyle"
                                onClick={updateFilterValue}>
                                {color === curColor ? "" : null}
                            </button>
                        );
                    })}
                </div>
            </div> */}
        </>
    );
};

export default FilterSection;
