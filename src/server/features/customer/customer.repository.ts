import { db } from '~/server/db/prisma';
import type {
    CreateCustomerRequest,
    CustomerWithRelations,
    UpdateCustomerRequest,
} from './customer.model';
import { type Customer } from '@prisma/client';

export const customerRepository = {
    findMany: async (): Promise<CustomerWithRelations[] | null> => {
        const customers = await db.customer.findMany({
            include: {
                guarantors: true,
                loan_references: true,
                credit_worthiness: true,
            },
        });

        return customers;
    },
    countMany: async (): Promise<number> => {
        const countCustomers = await db.customer.count();
        return countCustomers;
    },

    findUniqueId: async (id: string): Promise<CustomerWithRelations | null> => {
        const customer = await db.customer.findUnique({
            where: { id },
            include: {
                guarantors: true,
                loan_references: true,
                credit_worthiness: true,
            },
        });

        return customer;
    },

    findUniqueNationalId: async (
        national_id: string,
    ): Promise<CustomerWithRelations | null> => {
        const customer = await db.customer.findUnique({
            where: { national_id },
            include: {
                guarantors: true,
                loan_references: true,
                credit_worthiness: true,
            },
        });
        return customer;
    },

    countUniqueNationalId: async (national_id: string): Promise<number> => {
        const countCustomers = await db.customer.count({
            where: { national_id },
        });
        return countCustomers;
    },

    insertOnce: async (
        request: CreateCustomerRequest,
    ): Promise<Customer | null> => {
        const customer = await db.customer.create({ data: { ...request } });

        return customer;
    },

    updateOnce: async (
        id: string,
        request: UpdateCustomerRequest,
    ): Promise<Customer | null> => {
        const customer = await db.customer.update({
            where: { id },
            data: { ...request },
        });

        return customer;
    },

    deleteOnce: async (id: string): Promise<Customer | null> => {
        const customer = await db.customer.delete({ where: { id } });
        return customer;
    },
};
