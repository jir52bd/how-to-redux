import { COLORCHANGED, STATUSCHANGED } from "./actionType";
import initialState from "./initialState";

const reducer = (status = initialState, action) => {
    switch(action.type)
    {
        case STATUSCHANGED:
            return {
                ...status,
                status: action.playload,

            }
        
        case COLORCHANGED:
            const {color, chageType} = action.playload;

            switch(chageType)
            {
                case "added":
                    return {
                        ...status,
                        colors: [...status.colors, color],
                    }
                
                case "removed":
                    return {
                        ...status,
                        colors: status.colors.filter(
                            (existingColor) => existingColor !== color,
                        ),
                    }

                default:
                    return status;
            }
        
        default:
        return status;
    }
}

export default reducer;
