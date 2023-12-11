import { Typography} from '@mui/material';
import { Button } from '.';

export default {
    component: Button
};

export const PrimaryButton = {
    render: () => (
        <>
            <Typography>Primary</Typography>
            <Button variant="contained">Add Landlord</Button>
        </>
    )
};
