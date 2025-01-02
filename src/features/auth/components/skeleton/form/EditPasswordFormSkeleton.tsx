import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';
import { EditPasswordFormInnerSkeleton } from './EditPasswordFormInnerSkeleton';

export const EditPasswordFormSkeleton = () => {
    return (
        <Card className="border-none shadow-none">
            <CardContent className="space-y-6">
                <EditPasswordFormInnerSkeleton />
            </CardContent>
            <CardFooter className="place-content-end gap-5 pt-5">
                <Skeleton className="h-10 w-24" />
            </CardFooter>
        </Card>
    );
};
