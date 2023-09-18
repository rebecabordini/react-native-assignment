import React from 'react';
import { Payment } from 'types';
import { Image } from 'react-native';

const PaymentMethodIcon: React.FC<Pick<Payment, 'method'>> = ({ method }) => {
    switch (method) {
        case 'ideal':
            return (
                <Image
                    source={require('/assets/images/ideal.png')}
                />
            )
        case 'creditcard':
            return (
                <Image
                    source={require('/assets/images/creditcard.png')}
                />
            )
    }
};

export default PaymentMethodIcon;
