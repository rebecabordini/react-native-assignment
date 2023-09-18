import React, { useEffect, useState } from 'react';
import Amount from 'Amount';
import PaymentMethodIcon from 'PaymentMethodIcon';
import { Payment } from 'types';
import { View, Text } from 'react-native';

const Payments: React.FC = () => {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.mollie.com/payments');
            setPayments(await response.json());
        })();
    });

    return (
        <View>
            <View>
                <View>
                    <Text>ID</Text>
                </View>
                <View>
                    <Text>Method</Text>
                </View>
                <View>
                    <Text>Desription</Text>
                </View>
                <View>
                    <Text>Amount</Text>
                </View>
            </View>
            <View>
                {payments.map(payment => (
                    <View>
                        <View>
                            <Text>{payment.id}</Text>
                        </View>
                        <View>
                            <PaymentMethodIcon method={payment.method} />
                        </View>
                        <View>
                            <Text>{payment.description}</Text>
                        </View>
                        <View>
                            <Amount {...payment.amount} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Payments;
