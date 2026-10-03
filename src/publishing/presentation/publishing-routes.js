const categoryList = () => import('@/publishing/presentation/views/category-list.vue');
const categoryForm = () => import('@/publishing/presentation/views/category-form.vue');
const tutorialList = () => import('@/publishing/presentation/views/tutorial-list.vue');
const tutorialForm = () => import('@/publishing/presentation/views/tutorial-form.vue');

const publishingRoutes = [
    {
        path: 'categories',
        name: 'publishing-categories',
        component: categoryList,
        meta: {title: 'Categories'}
    },
    {
        path: 'categories/new',
        name: 'publishing-category-new',
        component: categoryForm,
        meta: {title: 'New Categories'}
    },
    {
        path: 'categories/:id/edit',
        name: 'publishing-category-edit',
        component: categoryForm,
        meta: {title: 'Edit Category'}
    },
    {
        path: 'tutorials',
        name: 'publishing-tutorials',
        component: tutorialList,
        meta: {title: 'Tutorials'}
    },
    {
        path: 'tutorials/new',
        name: 'publishing-tutorial-new',
        component: tutorialForm,
        meta: {title: 'New Tutorials'}
    },
    {
        path: 'tutorials/:id/edit',
        name: 'publishing-tutorial-edit',
        component: tutorialForm,
        meta: {title: 'Edit Tutorial'}
    },
];

export default publishingRoutes;
