import { BreadCrumb } from '@/types/breadcrumb';
import { WithClassName } from '@/types/shared';
import Link from 'next/link';

interface HeadingProps extends WithClassName {
  title: string;
  breadcrumbs: BreadCrumb[];
}

const Heading = ({ title, breadcrumbs }: HeadingProps) => {
  return (
    <header className="page">
      <div className="page_cover d-flex flex-column align-items-center justify-content-center">
        <div className="page_cover-img"></div>
        <h2 className="page_cover-title">{title}</h2>
      </div>
      <div className="page_breadcrumbs">
        <ul className="page_breadcrumbs-list d-flex flex-wrap justify-content-center h5">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              {breadcrumb.active ? (
                <span>{breadcrumb.name}</span>
              ) : (
                <Link className="link" href={breadcrumb.path}>
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Heading;
