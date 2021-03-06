/**
 * DB Models for Users
 */

import GetUser from './user.model'
import GetUserType from './user-type.model'
import GetUserHasRole from './user-has-role.model'
import GetUserHasType from './user-has-type.model'
import GetRole from './role.model'
import GetRolePerformsAction from './role-performs-action.model'
import GetPhoneNumber from './phone-number.model'
import GetAction from './action.model'
import GetImage from './images/image.model'
import GetImageType from './images/image-type.model'

export default (sequelize) => {
    const PhoneNumber = GetPhoneNumber(sequelize)
    const UserType = GetUserType(sequelize)
    const User = GetUser(sequelize, PhoneNumber)
    const UserHasType = GetUserHasType(sequelize, User, UserType)
    const Action = GetAction(sequelize)
    const Role = GetRole(sequelize, UserType)
    const UserHasRole = GetUserHasRole(sequelize, User, Role)
    const RolePerformsAction = GetRolePerformsAction(sequelize, Role, Action)
    const ImageType = GetImageType(sequelize)
    const Image = GetImage(sequelize, User, ImageType)

    return {
        User,
        UserType,
        UserHasType,
        Role,
        UserHasRole,
        PhoneNumber,
        Action,
        RolePerformsAction,
        Image,
        ImageType
    }
}