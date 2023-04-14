export function IconBtn({ Icon, color, ...props }) {
    return (
      <button
        className={`btn icon-btn  ${
          color || ""
        }`}
        {...props}
      >
        <span className={"mr-1"}>
          <Icon />
        </span>
      </button>
    )
  }