import { type Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerTableSkeleton } from '~/features/customer/components/skeleton/TableCustomerSkeleton';

export const metadata: Metadata = {
    title: 'Dashboard - Guarantor',
};

const DashboardGuarantorLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <Suspense fallback={<CustomerTableSkeleton />}>{children}</Suspense>;
};

export default DashboardGuarantorLayout;