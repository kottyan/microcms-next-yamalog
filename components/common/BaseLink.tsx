import {
  Link
} from '@mui/material'
import NextLink from 'next/link'

type BaseLinkProps = {
  href: string,
  text: string,
  underline?: 'always' | 'hover' | 'none',
  variant?: 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2',
  color?: string,
  sx?: {[key: string]: string}
}

export default function BaseLink(props: BaseLinkProps) {
  return (
    <NextLink href={props.href} passHref>
      <Link
        underline={props.underline || 'always'}
        variant={props.variant || 'inherit'}
        sx={props.sx || {}}
      >
        {props.text}
      </Link>
    </NextLink>
  )
}
