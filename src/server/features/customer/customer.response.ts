import { type Customer } from '@prisma/client';
import type { CustomerWithRelationsResponse } from './customer.model';

export const toCustomerResponse = (customer: Customer): Customer => ({
    id: customer.id,
    name: customer.name,
    national_id: customer.national_id,
    id_card_address: customer.id_card_address,
    residential_address: customer.residential_address,
    occupation: customer.occupation,
    phone: customer.phone,
    created_at: customer.created_at,
    updated_at: customer.updated_at,
});

export const toCustomerWithRelationsResponse = (
    customer: CustomerWithRelationsResponse,
): CustomerWithRelationsResponse => ({
    ...toCustomerResponse(customer),
    guarantors: customer.guarantors,
    loan_reference: customer.loan_reference,
    credit_worthiness: customer.credit_worthiness,
    transaction: customer.transaction,
});
