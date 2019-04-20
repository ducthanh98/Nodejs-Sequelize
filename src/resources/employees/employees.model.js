import db from '../../config/database';
import { STRING, INTEGER, DATE, BOOLEAN } from 'sequelize';

export default db.define('employees', {
    name: {
        type: STRING,
        allowNull: false
    },
    dob: {
        type: DATE,
        allowNull: false
    },
    sex: {
        type: BOOLEAN
    },
    address: {
        type: STRING
    }
}, {
        timestamps: false,
        modelName: 'employees'
    })
