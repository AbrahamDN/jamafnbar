import React from "react";

const MenuSection = ({ title, items, description, price }) => (
  <div className="mt-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    {description && <p className="mb-2 text-highlight dark:text-gray-200">{description}</p>}
    {items[0]?.medium ? (
      <div className="grid text-highlight dark:text-gray-200 grid-cols-5 gap-2">
        <div className="col-span-3 font-bold">Item</div>
        <div className="font-bold text-right">Medium</div>
        <div className="font-bold text-right">Large</div>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-span-3 text-highlight dark:text-gray-200">{item.name}</div>
            <div className="text-right font-medium text-highlight dark:text-gray-200">£{item.medium}</div>
            <div className="text-right font-medium text-highlight dark:text-gray-200">£{item.large}</div>
          </React.Fragment>
        ))}
      </div>
    ) : Array.isArray(items) ? (
      <ul className="space-y-3 text-highlight dark:text-gray-200">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="  ">{item.name || item}</span>
            <span className="font-medium">
              {item.medium
                ? `M: £${item.medium} L: £${item.large}`
                : item.price
                  ? `£${item.price}`
                  : ""}
              {item.note && ` (${item.note})`}
              {item.perPortion && " (per portion)"}
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <p>{items.join(" + ")}</p>
    )}
    {price && <p className="mt-2 font-bold text-highlight dark:text-gray-200">Price: £{price}</p>}
  </div>
);

export default MenuSection;
