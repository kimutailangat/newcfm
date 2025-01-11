import { Metadata } from 'next';
import { getFeaturedProducts } from '@/lib/apiCalls';
import { Container } from '@/components/ui/container';
import { ProductCard } from '@/components/product-card';
import { filteredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Featured | Continental Free Market",
  description: `Featured for e-ecommerce, selling products, and new productivity`,
};

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

const FeaturedPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const data = await getFeaturedProducts();

  let filtered: Product[] | undefined;

  if (searchParams.sort) {
    filtered = filteredData(searchParams, data);
  }

  return (
    <Container>
      <div className="flex flex-col gap-y-8 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(filtered || data)?.map((product: Product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedPage;git add "app/(routes)/featured/page.tsx"
