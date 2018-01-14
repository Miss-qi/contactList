import React from 'react';
import PhoneContactList from "../component/PhoneContactList";
import { Router, Scene, Stack } from "react-native-router-flux";
import PhoneContactDetail from "../component/PhoneContactDetail";

const AppRouter = () => (
    <Router>
        <Stack key="root">
            <Scene
                key="phoneContactList"
                component={PhoneContactList}
                title="通讯录"
                initial
            />
            <Scene
                key="phoneContactDetail"
                component={PhoneContactDetail}
                title="详情"
            />
        </Stack>
    </Router>
);

export default AppRouter;