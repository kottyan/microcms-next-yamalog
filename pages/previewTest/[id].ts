import {
  GetStaticProps,
  GetStaticPaths
} from 'next'

type PreviewParams = {
  message: string,
  timestamp: string
}

type PageProps = {
  message: string,
  timestamp: string
}

type PageParams = {
  id: string
}
export default function PreviewTest({ message, timestamp }: PageProps) {
  return message + " " + timestamp;
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = (context) => {
  const isPreviewParams = (value: unknown): value is PreviewParams => {
    return (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value)[0] === 'message' &&
      Object.keys(value)[1] === 'timestamp'
    )
  }
  const message = (isPreviewParams(context.previewData) && context.previewData.message) || ''
  const timestamp = (isPreviewParams(context.previewData) && context.previewData.timestamp) || ''
  return {
    props: {
      message: context.preview ? message : "none",
      timestamp: context.preview ? timestamp : "none",
    },
  };
}