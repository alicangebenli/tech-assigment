import CustomerModel from "../../../models/Customer";
import icons from "../../../resources/icons";

export default function (customers: CustomerModel[]) {
    return customers.map(x => {
        return {
            title: x.name,
            subTexts: [
                {
                    key: '1',
                    icon: icons.callIcon,
                    value: x.phone,
                    property: ''
                },
                {
                    key: '2',
                    icon: icons.atIcon,
                    value: x.username,
                    property: ''
                },
                {
                    key: '3',
                    icon: icons.listIcon,
                    value: x.policyNo,
                    property: 'Policy No.'
                }
            ]
        }
    });
}
