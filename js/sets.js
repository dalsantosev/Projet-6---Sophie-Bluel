import { showErrorElt } from "./gallery.js";

/* Create our sets, to use it later */
let works = new Set();
let categories = new Set();

/** Because it's a demo, we don't use any backend, so there is data from backend */
import { worksData, categoriesData } from "./data.js";

/**
 * make an api call to retrieve all works
 * and adds it to worksSet
 * @return {object} All works
 */
async function initWorksSet() {
    try {
        return worksData.map((work) => works.add(work));
    } catch {
        showErrorElt();
    }

    /**
     * This part isn't used in this demo
     * Because there's no back-end
     */
    /*
    return fetch('http://localhost:5678/api/works')
        .then( async res => {

            if (res.ok) return await res.json()

            // if back return error, reject the promise to show error Elt
            return Promise.reject(res);

        })
        .then( set => set.forEach( (work) => works.add(work)) )
        // if there's an error, create an error message on page.
        .catch( (error) => showErrorElt() );
      */
}

/**
 * Make an api call to retrieve categories
 * @return {object} all categories
 */
async function initCategoriesSet() {
    try {
        return categoriesData.map((category) => categories.add(category));
    } catch {
        showErrorElt();
    }
    /**
     * This part isn't used in this demo
     * Because there's no back-end
     */
    /*
    return fetch('http://localhost:5678/api/categories')
        .then( async res => {

            if (res.ok) return await res.json()

            return Promise.reject(data)

        })
        .then( set => set.forEach( (category) => categories.add(category)) )
        .catch( (error) => showErrorElt() );
      */
}

export { works, categories, initCategoriesSet, initWorksSet };
