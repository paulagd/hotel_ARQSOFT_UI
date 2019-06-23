import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors'

export default createMuiTheme({
    palette: colors.palette,
    overrides: {
        MuiButton: {
            label: {
                // background: colors.palette.error.main
            }
        }
    }
});