'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { toFormatDate } from '~/utils/toFormatDate';
import { CustomerTableMenu } from './CustomerTableMenu';
import { useCustomers } from '../../api/client';

export const CustomerTableBody = () => {
    const { data: customers } = useCustomers();
    return (
        <TableBody>
            {customers?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data nasabah.
                    </TableCell>
                </TableRow>
            )}
            {customers?.map((customer, index) => (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="capitalize">
                        {customer.name}
                    </TableCell>
                    <TableCell>{customer.national_id}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{toFormatDate(customer.created_at)}</TableCell>
                    <TableCell>{toFormatDate(customer.updated_at)}</TableCell>
                    <TableCell>
                        <CustomerTableMenu id={customer.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
