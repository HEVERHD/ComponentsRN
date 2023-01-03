import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animations01',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animations02',
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },

    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen',
    },

    {
        name: 'PullToRefreshScreen',
        icon: 'refresh-circle-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section list',
        icon: 'list-outline',
        component: 'CustomListScreen',
    },
    {
        name: 'Modal Screen',
        icon: 'copy-outline',
        component: 'ModalScreen',
    },

    {
        name: 'Infinite Scroll',
        icon: 'download-outline',
        component: 'InfiniteScrollscreen',
    },
];
